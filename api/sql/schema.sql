CREATE TABLE companies (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE subcategories (
  id INTEGER PRIMARY KEY,
  name TEXT,
  category_id INTEGER REFERENCES categories
);

CREATE TABLE treats (
  id INTEGER PRIMARY KEY,
  name TEXT,
  company_id INTEGER REFERENCES companies,
  category_id INTEGER REFERENCES categories,
  subcategory_id INTEGER REFERENCES subcategories
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  rating DECIMAL,
  treat_id INTEGER REFERENCES treats,
  user_id INTEGER REFERENCES users
);

DELETE from reviews; DELETE from treats; DELETE from users; DELETE from subcategories; DELETE from companies; DELETE from categories; 