import * as React from 'react';
import styles from './Socialiis7.module.scss';
import { ISocialiis7Props, ITopics, IEntity } from './ISocialiis7Props';
import { escape, cloneDeep } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { DefaultButton, autobind, getLanguage, ZIndexes } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { pivotOptionsGroup, } from '../../../services/propPane';
import {IUser, ISocialiis7State, IMyPivots, IPivot, ILoadData} from './ISocialiis7State';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

import {
  buildEntities,buildEntityKeywords, getEntitiesForThis

} from './Entities1/1EntityBuilder';
import {  buildEntities2} from './Entities2/1EntityBuilder';
import {  buildEntities4} from './Entities4/1EntityBuilder';
import {  buildEntities7} from './Entities7/1EntityBuilder';
import {  buildEntities9} from './Entities9/1EntityBuilder';

import * as choiceBuilders from './choiceFieldBuilder';

import PageNavigator from './Navigator/PageNavigator';
import { IPageNavigatorProps } from './Navigator/IPageNavigatorProps';

import AboutMe from './AboutMe/AboutMe';

/**
 * Typical Youtube embed
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 * 
 * frameborder="0" has to be removed.
 * allowfullscreen has to be removed but you can add "; fullscreen" into the allow= string
 * 
 * working example:
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
 * 
 */

export default class Socialiis7 extends React.Component<ISocialiis7Props, ISocialiis7State> {

  private createPivotData(sourceArray: any [], key = null){
    // Using https://stackoverflow.com/questions/3103962/converting-html-string-into-dom-elements
    let result : IPivot[] = [];
    let headers: string[]= [];
    if (!key) {
      for (let item of sourceArray) {
        let newPivot = {
          headerText: item,
          itemKey: item.replace(" ", ""),
          filter: item,
        };
        if (headers.indexOf(item) < 0 ) { result.push(newPivot); headers.push(item); }
      }
    } else {
      for (let item of sourceArray) {
        if (typeof item[key] !== 'string' && typeof item[key] !== 'number'){
          for (let child of item[key]) {
            let newPivot = {
              headerText: child,
              itemKey: child.replace(" ", ""),
              filter: child,
            };
            if (headers.indexOf(child) < 0 ) { result.push(newPivot); headers.push(child); }
          }
        } else {
          let newPivot = {
            headerText: item[key],
            itemKey: item[key].replace(" ", ""),
            filter: item[key],
          };
          if (headers.indexOf(item[key]) < 0 ) { result.push(newPivot); headers.push(item[key]); }
        }
      }
    }
    return result;
  }

  public constructor(props:ISocialiis7Props){
    super(props);

    this.onNavClick = this.onNavClick.bind(this);

    let currentPivotSet = "keysForTopic";

    let topics : ITopics = this.props.topics;

    let Entities1 = buildEntities(this.onNavClick);
    let Entities2 = buildEntities2(this.onNavClick);
    let Entities4 = buildEntities4(this.onNavClick);
    let Entities7 = buildEntities7(this.onNavClick);
    let Entities9 = buildEntities9(this.onNavClick);    
    
    let allEntities = Entities1.concat(Entities2).concat(Entities4).concat(Entities7).concat(Entities9);



    let loadData: ILoadData = {

      Entities1: Entities1,
      Entities2: Entities2,
      Entities4: Entities4,
      Entities7: Entities7,
      Entities9: Entities9,

      allEntities: allEntities,
      allEntityKeywords: buildEntityKeywords(allEntities, "keywords"),
      allTopics: buildEntityKeywords(allEntities, "keywords"),

      entitiesForMainTopic: [],
      availSubTopicEntities: [],
      keysForTopic: [],

      subTopic1Entities: null,
      subTopic2Entities: null,
      subTopic3Entities: null,

    };

    loadData = this._rebuildEntities(topics, loadData);

    let selectedEntity = loadData.subTopic1Entities[0];

    let pivots : IMyPivots = this._rebuildPivots(loadData);

    let currentPivots : IPivot[][] = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];

    this.state = { 
      sourceListName: "Something",
      description: "desc goes here",
      pivots: pivots,
      selectedMedia: '',
      loadStatus: "loading",
      currentPivotSet: currentPivotSet,
      currentPivots: currentPivots,
      selectedEntity: selectedEntity,
      navigationType: this.props.navigationType,
      topics: topics,
      selectedNavKey: 'public constructor(',
      loadData: loadData,

    };

    // because our event handler needs access to the component, bind 
    //  the component to the function so it can get access to the
    //  components properties (this.props)... otherwise "this" is undefined

    /*
        this.onLinkClick = this.onLinkClick.bind(this);
    */

  }

  public componentDidMount() {
    //this._getListItems();
    
  }
  
  public componentDidUpdate(prevProps){
/*
*/
    let rebuildPivots = false;
    if (this.props.topics !== prevProps.topics) {  rebuildPivots = true ; }

    if (rebuildPivots === true) {
      this._updateStateOnPropsChange({});
    }

  }

  public createPivotObject(currentPivots: IPivot[][], display){

    if (currentPivots.length === 0) { return '';}

    //let setPivot = pivots[0].headerText;
    let pivotPart = 
    <Pivot 
      style={{ flexGrow: 1, paddingLeft: '10px', display: display }}
      linkSize= { pivotOptionsGroup.getPivSize(this.props.pivotSize) }
      linkFormat= { pivotOptionsGroup.getPivFormat(this.props.pivotFormat) }
      onLinkClick= { this.onLinkClick.bind(this) }  //{this.specialClick.bind(this)}
      //selectedKey={ setPivot }
      headersOnly={true}>
        {this.createPivots(currentPivots[0] , this.props)}
        {this.createPivots(this.state.pivots.spacers , this.props)}
        {this.createPivots(currentPivots[1] , this.props)}
        {this.createPivots(this.state.pivots.spacers , this.props)}
        {this.createPivots(currentPivots[2] , this.props)}
    </Pivot>;
    return pivotPart;
  }

  public render(): React.ReactElement<ISocialiis7Props> {
    console.log('Public Render: this.state', this.state);

    /**
     * this section was added to keep pivots in sync when syncProjectPivotsOnToggle === true
     */

    let display1 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let display2 = this.state.loadStatus !== 'xyz' ? "block" :"none";
    let choice1 = this.state.loadStatus;
    let choice2 = this.state.loadStatus;

    let entryOptions = choiceBuilders.creatEntryTypeChoices(this.props,this.state, this._updateEntryType.bind(this));
    const stackFormRowsTokens: IStackTokens = { childrenGap: 10 };
    
    let aboutMe =  null;

    if ( this.state.selectedEntity && this.state.navigationType !== 'asdfasdf' ) {
        console.log("Should get image!");
        aboutMe = 
        <AboutMe
          imageUrl={this.state.selectedEntity.profilePic}
          setImgCover='centerContain'
          setImgFit='portrait'
          imageHeight={400}
          imageWidth={600}
        >
      </AboutMe>;
    }
        /*
    */

    /*
    if (this.state.syncProjectPivotsOnToggle){
      display1 = "block";
      display2 = "none";
      choice1 = this.state.projectMasterPriorityChoice;
      choice2 = this.state.projectMasterPriorityChoice;
    }
*/

    /*
        */

    const leftNavigation: React.ReactElement<IPageNavigatorProps > = React.createElement(
      PageNavigator,
      {
        description: 'Social Footprint',
        //Why do I get an error here every time?
        //selectedKey: 'x',
        selectedNavKey: this.state.selectedNavKey,
        anchorLinks: (this.state.selectedEntity ? this.state.selectedEntity.navigation : []),
      }
    );

    return (
      <div className={ styles.socialiis7 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <div className={styles.floatLeft}>
          { this.createPivotObject(this.state.currentPivots, display1)  }
          </div>
          <Stack horizontal={true} horizontalAlign={"end"} tokens={stackFormRowsTokens}>{/* Stack for Buttons and Fields */}

          { ( this.props.navigationType === 'choice' ? entryOptions : leftNavigation ) }
            <div className={ styles.column }>

            <div className={ styles.description }>
              { aboutMe }
            </div>
            </div>
            </Stack>  {/* Stack for Buttons and Fields */}


          </div>
          <div className={ styles.description }>
            { /* https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript/46862258#46862258:
              JSON.stringify(jsonobj,null,'\t') */}
            { (this.state.selectedEntity ? (JSON.stringify(this.state.selectedEntity.navigation, undefined, 4)) : '')  }
          </div>


        </div>
      </div>
    );
  }

  private _updateStateOnPropsChange(params: any ): void {

    let loadData = this._rebuildEntities(this.props.topics, this.state.loadData);

    let selectedEntity = loadData.subTopic1Entities[0];

    let pivots = this._rebuildPivots(loadData);

    let currentPivots : IPivot[][] = [pivots.subTopic1Titles,pivots.subTopic2Titles,pivots.subTopic3Titles];

    let topics : ITopics = this.props.topics;

    this.setState({
      pivots: pivots,
      currentPivots: currentPivots,
      selectedEntity: selectedEntity,
      loadData: loadData,
      topics: topics,
    });

  }

  private _rebuildEntities(topics: ITopics, loadData1: ILoadData ) {

    let loadData: ILoadData = cloneDeep(loadData1);

    loadData.entitiesForMainTopic = getEntitiesForThis(loadData.allEntities, "keywords",topics.mainTopic);
    loadData.availSubTopicEntities = cloneDeep(loadData.entitiesForMainTopic);
    loadData.subTopic1Entities = getEntitiesForThis(loadData.entitiesForMainTopic, "keywords", topics.subTopic1);

    //This loop removes entities from what is available for the next section so pivots are not duplicated.
    //https://stackoverflow.com/questions/47017770/remove-array-of-objects-from-another-array-of-objects/47017949
    loadData.availSubTopicEntities =  loadData.availSubTopicEntities.filter( 
      x => !loadData.subTopic1Entities.filter( y => y.title === x.title).length);

    loadData.subTopic2Entities = getEntitiesForThis(loadData.availSubTopicEntities, "keywords", topics.subTopic2);

    //This loop removes entities from what is available for the next section so pivots are not duplicated.
    //https://stackoverflow.com/questions/47017770/remove-array-of-objects-from-another-array-of-objects/47017949
    loadData.availSubTopicEntities =  loadData.availSubTopicEntities.filter( 
      x => !loadData.subTopic2Entities.filter( y => y.title === x.title).length);

    loadData.subTopic3Entities = getEntitiesForThis(loadData.availSubTopicEntities, "keywords", topics.subTopic3);
    loadData.keysForTopic = buildEntityKeywords(loadData.entitiesForMainTopic, "keywords");

    return loadData;

  }

  private _rebuildPivots(loadData: ILoadData ) {

    let pivots : IMyPivots = {
      allTopics: this.createPivotData(loadData.allTopics, null),
      allEntityKeywords: this.createPivotData(loadData.entitiesForMainTopic, 'keywords'),
      keysForTopic:this.createPivotData(loadData.keysForTopic, null),
      subTopic1Titles: this.createPivotData(loadData.subTopic1Entities, 'title'),
      subTopic2Titles: this.createPivotData(loadData.subTopic2Entities, 'title'),
      subTopic3Titles: this.createPivotData(loadData.subTopic3Entities, 'title'),
      entTitlesForTopics: [],
      spacers: this.createPivotData([" "], null),
    };

    return pivots;

  }


  private _updateEntryType(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption){

    console.log('_updateEntryType: ev', ev);

    let selectedMedia = option.key;

    this.setState({ 
      selectedMedia: selectedMedia,
     });
  }


  public onLinkClick = (item): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    let e: any = event;

    if (e.ctrlKey) {
      //Set clicked pivot as the hero pivot


    } else if (e.altKey) {
      //Enable-disable ChangePivots options
      /*
      this.setState({
        
      });
      */

    } else {



      //console.log('onLinkClick: this.state', this.state);
      //console.log('onLinkClick: item', item);
      
      let thisFilter = [];
      let pivots = this.state.pivots.allTopics;  
      let selectedEntity : IEntity = null;
      for (let entity of this.state.loadData.entitiesForMainTopic){
        if ( entity.title === item.props.headerText ) {
          selectedEntity = entity;
        }
      }

      this.setState({
        selectedEntity:selectedEntity,
      });

    }

  } //End onClick

  public onNavClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void => {
    //This sends back the correct pivot category which matches the category on the tile.

    let e: any = ev;

    ev.preventDefault(); // Let's stop this event.
    e.preventDefault(); // Let's stop this event.

    let thisEntityKey = item.key.split('||||')[0];
    let selectedEntity : IEntity = null;

    for (let ent of this.state.loadData.entitiesForMainTopic) {
      if (ent.titleKey === thisEntityKey) { selectedEntity = ent }
    }
    console.log('onNavClick: this.state', this.state);
    console.log('onNavClick: item', item);
    console.log('onNavClick: ev', ev);
    console.log('onNavClick: e', e);
    if (ev.ctrlKey) {
      //Set clicked pivot as the hero pivot
        let openThisWindow = item.url;
        window.open(openThisWindow, '_blank');
        this.setState({
          selectedEntity : selectedEntity,
          selectedNavKey : item.key,
        });


    } else if (ev.altKey) {
      //Enable-disable ChangePivots options
      /*
      this.setState({
        
      });
      */

    } else {

      this.setState({
        selectedEntity : selectedEntity,
        selectedNavKey : item.key,
      });

    }

  } //End onNavClick


  //http://react.tips/how-to-create-reactjs-components-dynamically/ - based on createImage
  public createPivot(pivT: IPivot) {

    return (
      <PivotItem 
        headerText={pivT.headerText} 
        itemKey={pivT.itemKey}
      >
      </PivotItem>
    );
  }

  public createPivots(pivots: IPivot[], thisProps: ISocialiis7Props){
    let piv2 = pivots.map(this.createPivot);
    return (
      piv2
    );
  }


}