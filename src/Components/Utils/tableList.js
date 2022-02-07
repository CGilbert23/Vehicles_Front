
/*GRAB UNIQUE VALUES IN A LIST*/
const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  

/*APPLY FUNCTION TO DEPARTMENTS*/
const TableList = ({data}) => {

    const list = data.map((element)=> element.store)
    const uniquelist = list.filter(unique)
    return uniquelist
}


export default TableList