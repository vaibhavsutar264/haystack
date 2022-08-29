
export default function TitleCell(props) {
   return (
      <div>
         <p>
            <div className='div-primary' to={`/users/edit/${props.row.values?.id}`}>{props.value}</Link>
         </p>
      </div>
   )
}
