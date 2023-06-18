import React, { useState } from "react";
import data2 from "./data2";
import { Pagination } from "@mui/material";
import { JSX } from "react/jsx-runtime";

const getFilteredNotifications = (data: any[], activeTab: number) => {
  switch (activeTab) {
    case 0:
      return data;
    case 1:
      return data.filter(
        (notification: { type: string }) => notification.type !== "order"
      );
    case 2:
      return data.filter((notification) => notification.type === "order");
    default:
      return data;
  }
};

const itemsPerPage = 5;
const paginationData = (filteredData: any[], page: number) => {
  return filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
};

const NotificationsList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (
    event: any,
    value: React.SetStateAction<number>
  ) => {
    setPage(value);
  };

  const filteredNotifications = getFilteredNotifications(data2, activeTab);

  const displayedData = paginationData(filteredNotifications, page);

  return (
    <>
      <div>
        <button onClick={() => setActiveTab(0)}>All</button>
        <button onClick={() => setActiveTab(1)}>Active</button>
        <button onClick={() => setActiveTab(2)}>Order</button>
      </div>

      <div>
        {displayedData.map(
          (
            item: JSX.IntrinsicAttributes & {
              type: any;
              isRead: any;
              title: any;
              body: any;
            },
            index: React.Key | null | undefined
          ) => (
            <Notification key={index} {...item} />
          )
        )}
      </div>

      <Pagination
        count={Math.ceil(displayedData.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};

type NotificationType = {
  type: any;
  isRead: boolean;
  title: string;
  body: any;
};

const Notification = ({ type, isRead, title, body }: NotificationType) => {
  const renderBodyContent = () => {
    switch (type) {
      case "login":
        return (
          <p>
            {body.date}(UTC) {body.account} is logged in from {body.ip}/United{" "}
            {body.country}/{body.os}/{body.browser} If this is not you, please
            change your password and contact Customer Support immediately.
          </p>
        );
      case "order":
        return (
          <>
            <p>Full Code: {body.full_code}</p>
            <p>Price: {body.price}</p>
            <p>Volume: {body.volume}</p>
          </>
        );
      case "withdrawal":
        return (
          <p>
            {body.date}(UTC) {body.coin_cd} {body.coin_qty} has been processed.
            If you did not recognize this activity, please contact Customer
            Support immediately.
          </p>
        );
      case "deposit":
        return (
          <p>
            {body.coin_cd} {body.coin_qty} was deposited on {body.date}(UTC). If
            you didn't recognize this activity, please contact Customer Support
            immediately.
          </p>
        );
      default:
        return (
          <div>
            {Object.entries(body).map(([key, value]) => (
              <p key={key}>
                <>
                  {key}: {value}
                </>
              </p>
            ))}
          </div>
        );
    }
  };

  return (
    <div>
      <h3>
        {title} ({isRead ? "Read" : "Unread"})
      </h3>
      <p>Type: {type}</p>
      {renderBodyContent()}
      <hr />
    </div>
  );
};

export default NotificationsList;
