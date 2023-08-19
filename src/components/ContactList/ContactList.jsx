import { Filter } from 'components/FilterContacts/FilterContacts';
import {
  StyledLi,
  StyledH2,
  StyledUl,
  StyledButton,
} from './ContactList.style';

export const ContactList = ({
  title,
  contacts,
  filter,
  onChange,
  onDelete,
}) => {
  return (
    <>
      <StyledH2>{title}</StyledH2>
      <Filter value={filter} onChange={onChange} />
      <StyledUl>
        {contacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <StyledButton type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </StyledButton>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
