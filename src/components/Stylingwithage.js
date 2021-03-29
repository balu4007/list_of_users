import React from "react";

const Stylingwithage = (Component) => {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return ({ user, ...props }) => {
    const age = getAge(user.dob);
    const bg = age <= 30 ? "yellow" : "green";
    return <Component {...props} user={user} bg={bg} />;
  };
};

export default Stylingwithage;
