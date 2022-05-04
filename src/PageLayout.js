import React from "react";


const PageLayout = ({ babyNames }) => {

  const fColor = {
    backgroundColor: 'gold'
  }
  const mColor = {
    backgroundColor: 'black',
    color: 'gold'
  }

  babyNames.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })



  return (
    <div>
      <div className="search">
        <p>Name Search</p>
        <input className="searchbar"></input>
      </div>
      <div className="name-selection">
        {
          babyNames.map((obj,) => {
            const sex = obj.sex;
            return (
              <button key={obj.id} style={sex === "f" ? fColor : mColor}> {obj.name}</button>);
          })
        }
      </div>
    </div >
  )
}

export default PageLayout;