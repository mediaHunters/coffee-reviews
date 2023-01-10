export const DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for('UserService'),
  AUTHENTICATION_SERVICE: Symbol.for('AuthenticationService'),
  COFFEE_SERVICE: Symbol.for('CoffeeService'),
};

export const DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for('UserDomain'),
  ROLE_DOMAIN: Symbol.for('RoleDomain'),
  COFFEE_DOMAIN: Symbol.for('CoffeeDomain'),
};

export const DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for('RoleRepository'),
  USER_REPOSITORY: Symbol.for('UserRepository'),
  COFFEE_REPOSITORY: Symbol.for('CoffeeRepository'),
};

export const DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for('UserUnitOfWork'),
  COFFEE_UNIT_OF_WORK: Symbol.for('CoffeeUnitOfWork'),
};
