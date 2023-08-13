export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li>{contact.name}</li>
      ))}
    </ul>
  );
};
