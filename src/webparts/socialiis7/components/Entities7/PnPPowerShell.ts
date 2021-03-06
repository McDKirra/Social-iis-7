
import { IEntity } from '../ISocialiis7Props';


export function PnPPowerShell(){

    const entity :IEntity = {
      Title: 'PnPPowerShell', //
      keywords: ["PowerShell","SharePoint","ttp"],
      profilePic: "https://collab365.community/wp-content/uploads/2018/12/get-started-with-sharepoint-powershell-pnp-1280x720.png",
      blog: [
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End twitter
      facebook:
      {
        NavTitle: '',
        order: 1, //For Sorting
        url: '',
        objectType: 'TBD', //Used to determine what functions to have avaialble
      } ,  // End facebook
      linkedIn:
        {
          NavTitle: '',
          order: 1, //For Sorting
          url: '',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End linkedIn
      github:
        {
          NavTitle: 'GitHub',
          order: 1, //For Sorting
          url: 'https://github.com/SharePoint/PnP-PowerShell',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        } ,  // End github
      webSites: [
        {
          NavTitle: 'Community',
          order: 1, //For Sorting
          url: 'https://techcommunity.microsoft.com/t5/powershell/ct-p/WindowsPowerShell',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        },        {
          NavTitle: 'MS Documentation',
          order: 1, //For Sorting
          url: 'https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps',
          objectType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      youtube: {
        NavTitle: 'YouTube',
        user: 'Shane Young', //Youtube User (from URL)
        order: 0, //For Sorting
        items: [
          {
            NavTitle: 'SP Dev Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC_mKdhw-V6CeCM7gTo_Iy7w', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UC_mKdhw-V6CeCM7gTo_Iy7w', // to be used as generic link if no API key is given
          },
          {
            NavTitle: 'Shane Young',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC7_OGRP8BYvtGB8eZdPG6Ng', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/channel/UC7_OGRP8BYvtGB8eZdPG6Ng', // to be used as generic link if no API key is given
          },{
            NavTitle: 'All things PS',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLCGGtLsUjhm2k22nFHHdupAK0hSNZVfXi', //Used to determine what functions to have avaialble
            url: 'https://www.youtube.com/watch?v=IHrGresKu2w&list=PLCGGtLsUjhm2k22nFHHdupAK0hSNZVfXi', // to be used as generic link if no API key is given
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
