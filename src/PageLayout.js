import React, { useState } from "react";

const PageLayout = ({ babyNames }) => {


  const fColor = {
    backgroundColor: 'gold'
  }
  const mColor = {
    backgroundColor: 'black',
    color: 'gold'
  }

  const [search, setSearch] = useState('')

  const [filteredNames, setFilteredNames] = useState(babyNames)

  const filter = (e) => {

    const keyword = e.target.value;

    if (keyword !== '') {
      const results = babyNames.filter((baby) => {
        return baby.name.toLowerCase().startsWith(keyword.toLowerCase())
      });
      setFilteredNames(results);
    } else {
      setFilteredNames(babyNames);
    }

    setSearch(keyword)
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
      <div className="searchComponent">
        <p>Name Search</p>
        <input className="searchbar"
          type="search"
          value={search}
          onChange={filter}
          placeholder="Type name..."
        />
      </div>
      <div className="name-selection">
        {filteredNames && filteredNames.length > 0 ? (
          filteredNames.map((obj) => {
            const sex = obj.sex;
            return (
              <button key={obj.id}
                style={sex === "f" ? fColor : mColor}>
                {obj.name}
              </button>);
          })) : (
          <h1>No results found..</h1>
        )}
      </div>
    </div >
  )
}

export default PageLayout;