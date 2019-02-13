import generateCustomers from './customers';
import generateCategories from './categories';
import generateProducts from './products';
import generateCommands from './commands';
import generateInvoices from './invoices';
import generateReviews from './reviews';
import generateRoles from './roles';
import finalize from './finalize';
import generatePoi from './poi';

export default (options = { serializeDate: true }) => {
    const db = {};
    db.customers = generateCustomers(db, options);
    db.categories = generateCategories(db, options);
    db.products = generateProducts(db, options);
    db.commands = generateCommands(db, options);
    db.invoices = generateInvoices(db, options);
    db.reviews = generateReviews(db, options);
    db.chats = generateCustomers(db, options);
    db.poi = generatePoi(db, options);
    db.roles = generateRoles(db, options);
    finalize(db);

    return db;
};
