const SE_GRAHAS = require('./../SE_GRAHAS');



describe('SE_GRAHAS', () => {

	it('Has 9 key value pairs in the SE_GRAHAS', () => {
		expect(Object.keys(SE_GRAHAS)).toHaveLength(8);
	});

	it('Has all the 8 Grahas inside the object with correct number', () => {
		expect(SE_GRAHAS).toHaveProperty('Su', 0);
		expect(SE_GRAHAS).toHaveProperty('Mo', 1);
		expect(SE_GRAHAS).toHaveProperty('Me', 2);
		expect(SE_GRAHAS).toHaveProperty('Ve', 3);
		expect(SE_GRAHAS).toHaveProperty('Ma', 4);
		expect(SE_GRAHAS).toHaveProperty('Ju', 5);
		expect(SE_GRAHAS).toHaveProperty('Sa', 6);
		expect(SE_GRAHAS).toHaveProperty('Ra', 10);
	});
});