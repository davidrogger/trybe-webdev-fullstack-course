const typeLibrary: Record<string, string> = {
  email: 'Email: ',
  phone: 'Phone: ',
  console: 'Console: ',
};

export default function progressNotification(
  message: string,
  notificationType:string,
  ): void {
    const type = typeLibrary[notificationType.toLocaleLowerCase()] || '';
    console.log(type + message);
}

progressNotification('batata', 'xa');