import { StyledLi } from './ContactList.style';

export const ContactList = ({ title, contacts, number }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </StyledLi>
          );
        })}
      </ul>
    </>
  );
};
