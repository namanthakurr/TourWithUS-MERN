import bcrypt from "bcryptjs";


const plainPassword = '$2a$12$Bm2uFf6qJdHbMQYgwfxhHuXDouPqwJMssuxgqyla6qBAIuDp0K7cy';
const hashedPassword = '$2a$12$Bm2uFf6qJdHbMQYgwfxhHuXDouPqwJMssuxgqyla6qBAIuDp0K7cy';

bcrypt.compare(plainPassword, hashedPassword, function(err, result) {
    console.log(result); // should print 'true' if they match, 'false' otherwise
});
