
import { IEntity } from '../ISocialiis7Props';

export function Camaro(){

  const entity :IEntity = {
    Title: 'Camaro', //
    keywords: ["Auto","GM","Chevy","North America","Cars","Sport","Gas","Vehicle"], // Can be any number of
    profilePic: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/performance/camaro/gallery/exterior/01-images/2020-camaro-ext-gal-05.jpg",
    blog: [
      {
        NavTitle: 'Someone\'s Blog',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    twitter: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End twitter
    facebook: 
    {
      NavTitle: '',
      order: 1, //For Sorting
      url: '',
      codeType: 'TBD', //Used to determine what functions to have avaialble
    } ,  //  End facebook
    linkedIn: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End linkedIn
    github: 
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      } ,  //  End github
    webSites: [
      {
        NavTitle: 'Camaro Home',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        NavTitle: 'Camaro',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/performance/camaro',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      },
      {
        NavTitle: '2020 Corvette',
        order: 1, //For Sorting
        url: 'https://www.chevrolet.com/upcoming-vehicles/2020-corvette',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
    ],
    youtube: {
      NavTitle: 'YouTube',
      user: '', //Youtube User (from URL)
      order: 0, //For Sorting
      items: [
        {
          NavTitle: '',
          objectType: 'Video', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Channel', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        },{
          NavTitle: '',
          objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
          objectID: '', //Used to determine what functions to have avaialble
          objectUrl: '', // to be used as generic link if no API key is given
        }
      ] // End YouTube items
    }, // End YouTube


  };

    //instagram:any,
    //facebook: any,
    //github: any,
    //androidStore: any,
    //appleStore: any,

    return entity;
    
}