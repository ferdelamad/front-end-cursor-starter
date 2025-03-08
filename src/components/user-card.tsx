interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    lastActive: Date;
  }
  
  export const UserCard = ({ user }: { user: User }) => {
    // TODO: Implement status indicator based on lastActive
    // Start typing "const status =" and use Tab
  
    return (
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-bold">{user.name}</h3>
        {/* TODO: Add more user details with proper formatting
        Use Tab to complete the component */}
      </div>
    );
  };