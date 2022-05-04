import React, { useState } from "react";

const PageLayout = ({ babyNames }) => {

  // button colour settings
  const fColor = {
    backgroundColor: 'gold'
  }
  const mColor = {
    backgroundColor: 'black',
    color: 'gold'
  }

  // creating states for filter
  const [search, setSearch] = useState('')

  const [filteredNames, setFilteredNames] = useState(babyNames)

  // filter component
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

  // sorting names into ascending alphabetical order
  babyNames.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

  // creating page...
  return (
    <div>
      {/* container handling searchbar */}
      <div className="searchComponent">
        <p>Name Search</p>
        <input className="searchbar"
          type="search"
          value={search}
          onChange={filter}
          placeholder="Type name..."
        />
      </div>

      {/* container handling array of buttons */}
      <div className="name-selection">

        {/* checking if name is in the array */}
        {filteredNames && filteredNames.length > 0 ? (
          filteredNames.map((obj) => {

            // defining variable used to choose colour settings
            const sex = obj.sex;

            // creating buttons
            return (
              <button key={obj.id}
                style={sex === "f" ? fColor : mColor}>
                {obj.name}
              </button>);
          })) : (
          // message will appear if search is not part of array
          <h1>No results found..</h1>
        )}
      </div>
    </div >
  )
}

export default PageLayout;