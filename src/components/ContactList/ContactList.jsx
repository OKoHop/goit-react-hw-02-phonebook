export const ContactList = ({ title, contacts }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>{contact.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
