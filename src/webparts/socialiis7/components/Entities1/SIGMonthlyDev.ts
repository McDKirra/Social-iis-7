
import { IEntity } from '../ISocialiis7Props';

export function SIGMonthlyDev(){

    const entity :IEntity = {
      title: 'SIG Monthly', //
      keywords: ["SIG","SharePoint","SPFx"],
      profilePic: "https://developer.microsoft.com/en-us/sharepoint/blogs/wp-content/uploads/2019/12/Thumbnail-Dec-10-Gen-900x360.png",
      blog: [
        {
          title: 'Blog',
          order: 1, //For Sorting
          url: 'https://developer.microsoft.com/en-us/sharepoint/blogs/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter: 
        {
          title: '',
          order: 1, //For Sorting
          url: '',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End twitter
      facebook: 
      {
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
      }
      ,  // End facebook
      linkedIn: 
        {
          title: '',
          order: 1, //For Sorting
          url: '',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End linkedIn
      github: 
        {
          title: '',
          order: 1, //For Sorting
          url: '',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ,  // End github
      webSites: [
        {
          title: 'YouTube Call Playlist',
          order: 1, //For Sorting
          url: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        title: 'YouTube',
        user: '', //Youtube User (from URL)
        order: 0, //For Sorting
        channels: [
          {
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: '',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          }
        ], // End YouTube channels
        playLists: [
          {
            title: '',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: '', //Used to determine what functions to have avaialble
            objectUrl: '', // to be used as generic link if no API key is given
          },{
            title: 'Monthly Dev playlist',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/playlist?list=PLR9nK3mnD-OVC4_ut9bUi6ffRXLVuF0_g', // to be used as generic link if no API key is given
          }
        ] // End YouTube playlists
      }, // End YouTube
  
  
    };
  
      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;
      
  }