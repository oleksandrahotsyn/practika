enum Role {
  Admin,
  User,
  Guest,
}

function getPremissions(role: Role): string[] {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];

    case Role.User:
      return ["read", "update"];

    case Role.Guest:
      return ["read"];

    default:
      return [];
  }
}

getPremissions(0);
