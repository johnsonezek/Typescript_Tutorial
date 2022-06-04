import {Name} from './Person.types';

type PersonListProps = {
  Names: Name[]
};
export const PersonList = (props: PersonListProps) => {
    console.log(props);
  return (
    <div>
     {props.Names.map(name => {
         return (
             <h1 key={name.firstName}>{name.firstName} {name.lastName}</h1>
         )
     })}
    </div>
  );
};
