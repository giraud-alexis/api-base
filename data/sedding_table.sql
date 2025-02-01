BEGIN;

INSERT INTO "example" (id, email, password, role)
VALUES
(1, 'alexis33190@gmail.com', '$2b$10$FhtWLAN6ErZIrVyouYxGhuAbxlan7k.GTwq8sWYZD80UiYitK4M.C', 'admin');

COMMIT;