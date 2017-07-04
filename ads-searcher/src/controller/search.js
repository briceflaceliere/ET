/**
 * Search controller
 */
class SearchController {

    /**
     * The search action
     * @param req
     * @param res
     */
    searchAction(req, res) {
        let mock = [
            {
                title: 'Title',
                type: 'TYPE_HOUSE',
                category: 'CATEGORY_LOCATION',
                price: {
                    value: '550',
                    money: 'MONEY_EURO',
                    frequency: 'FREQUENCY_MOUTH',
                },
                location : {
                    latitude: 46.1666700,
                    longitude: -1.1500000,
                },
                city: {
                    name: 'La rochelle',
                    zipcode: 17000,
                    insee: '000001',
                }
            }
        ];
        res.send(JSON.stringify(mock));
    }
    
}

module.exports = new SearchController();