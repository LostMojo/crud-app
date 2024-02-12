INSERT INTO person (
    first_name,
    last_name,
    email_address,
    street_address,
    city,
    state,
    zip_code,
    client_id
) VALUES (
    'John',
    'Smith',
    'fake1@aquent.com',
    '123 Any St.',
    'Asheville',
    'NC',
    '28801',
    NULL
), (
    'Jane',
    'Smith',
    'fake2@aquent.com',
    '123 Any St.',
    'Asheville',
    'NC',
    '28801',
    1
);

INSERT INTO client (
    company_name,
    website_uri,
    phone_number,
    street_address,
    city,
    state,
    zip_code
) VALUES (
    'Aquent',
    'test://192.0.2.16:80',
    '1234567890',
    '123 Somewhere St.',
    'Nowhere',
    'TX',
    '77012'
)
