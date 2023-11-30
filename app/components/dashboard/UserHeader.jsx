import React from "react";

const UserHeader = () => {
  return (
    <div className="flex items-center text-center p-3 rounded-t-lg bg-secondary text-white divide-x-2 sticky top-16">
      <div className="w-full px-2 text-ellipsis overflow-hidden">ID</div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">Name</div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">Email</div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">Phone</div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">Role</div>
    </div>
  );
};

export default UserHeader;
