import React from "react";

interface ItemType {
  id: number;
  title?: string;
  price?: number;
  imageUrl: string;
  linkUrl: string;
}

interface GroupType {
  items: ItemType[];
}

interface SectionProps {
  section: {
    type: string;
    groups: Array<GroupType>;
  };
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <div className={`section ${section.type}`}>
      {section.groups.map((group, index) => (
        <Group key={index} group={group} />
      ))}
    </div>
  );
};

interface ItemType {
  id: number;
  title?: string;
  price?: number;
  imageUrl: string;
  linkUrl: string;
}

interface GroupProps {
  group: {
    items: Array<ItemType>;
  };
}

const Group: React.FC<GroupProps> = ({ group }) => {
  return (
    <div className="group">
      {group.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

interface ItemProps {
  item: {
    id: number;
    title?: string;
    price?: number;
    imageUrl: string;
    linkUrl: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export { Section, Group, Item };

// import { AdItem, BannerItem, RecentlyViewedItem } from "./type";
//
// type ItemProps = {
//   item: BannerItem | RecentlyViewedItem | AdItem;
// };
//
// type GroupProps = {
//   group: {
//     items: (BannerItem | RecentlyViewedItem | AdItem)[];
//   };
// };
//
// type SectionProps = {
//   section: {
//     groups: GroupProps["group"][];
//   };
// };
//
// const Item: React.FC<ItemProps> = ({ item }) => {
//   console.log(item, "itemrender");
//
//   switch (item.type) {
//     case "BANNER":
//       return (
//         <div className="banner-item">
//           <a href={item.linkUrl}>
//             <img src={item.imageUrl} alt={`배너 ID: ${item.id}`} />
//           </a>
//         </div>
//       );
//     case "RECENTLY_VIEWED":
//       return (
//         <div className="recently-viewed-item">
//           <a href={item.linkUrl}>
//             <img src={item.imageUrl} alt={`상품 제목: ${item.title}`} />
//             <p>{item.title}</p>
//             <p>{item.price}원</p>
//           </a>
//         </div>
//       );
//     case "AD":
//       return (
//         <div className="ad-item">
//           <p>광고: {item.key}</p>
//         </div>
//       );
//     default:
//       return <div>asad</div>;
//   }
// };
//
// const Group: React.FC<GroupProps> = ({ group }) => {
//   return (
//     <div className="group">
//       {group.items.map((item, index) => (
//         <Item key={index} item={item} />
//       ))}
//     </div>
//   );
// };
//
// const Section: React.FC<SectionProps> = ({ section }) => {
//   return (
//     <div className="section">
//       {section.groups.map((group, index) => (
//         <Group key={index} group={group} />
//       ))}
//     </div>
//   );
// };
//
