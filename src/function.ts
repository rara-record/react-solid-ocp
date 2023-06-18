export default function generateSections(apiSections: any[]) {
  const sections = [];
  for (const section of apiSections) {
    console.log(section.ad, "fun");

    sections.push({
      type: section.type,
      groups: [
        {
          items: section.items.map(factory),
        },
        ...(section.ad
          ? [
              {
                items: [
                  {
                    type: "AD",
                    key: section.ad,
                  },
                ],
              },
            ]
          : []),
        ...(section.items_below_ad
          ? [
              {
                items: section.items_below_ad.map(factory),
              },
            ]
          : []),
      ],
    });
  }

  return sections;
}

function factory(item: any) {
  return {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    linkUrl: item.linkUrl,
    price: item.price,
  };
}

// export const generateSections = (apiSection: any) => {
//   const sections = [];
//   for (const section of apiSection) {
//     sections.push({
//       type: section.type,
//       groups: [
//         {
//           items: section.items.map(factory),
//         },
//         ...(section.ad
//           ? [
//               {
//                 items: [
//                   {
//                     type: "AD",
//                     key: section.ad,
//                   },
//                 ],
//               },
//             ]
//           : []),
//         ...(section.items_below_ad
//           ? [
//               {
//                 items: section.items_below_ad.map(factory),
//               },
//             ]
//           : []),
//       ],
//     });
//   }
//   return sections;
// };
//
// const factory = (item: any) => {
//   switch (item.type) {
//     case "BANNER":
//       return {
//         type: item.type,
//         id: item.id,
//         imageUrl: item.imageUrl,
//         linkUrl: item.linkUrl,
//       };
//     case "RECENTLY_VIEWED":
//       return {
//         type: item.type,
//         id: item.id,
//         imageUrl: item.imageUrl,
//         linkUrl: item.linkUrl,
//         title: item.title,
//         price: item.price,
//       };
//     case "AD":
//       return {
//         type: item.type,
//         key: item.key,
//       };
//     default:
//       return null;
//   }
// };
