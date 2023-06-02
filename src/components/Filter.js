const Filter = ({showAll, handleFilterChange}) => {
    return (
      <>
        filter shown with<input value={showAll} onChange={handleFilterChange}/><br />
      </>
    )
  }

  export default Filter
