import React from "react";

const UserBody = ({ user }) => {
  return (
    <div className="flex items-center text-center p-2 bg-secondary/5">
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {user._id}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {user.username}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {user.email}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {user.phone}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {user.role}
      </div>
    </div>
  );
};

export default UserBody;
