import { expect } from "chai";
import { petAdoptionAgency } from "./Pet-Adoption-Agency.js";

describe('Pet Adoption Agency', function () {
  describe('isPetAvailable', function () {
    it('Available count < 0', () => {
      const pet = 'dog';

      expect(petAdoptionAgency.isPetAvailable(pet, -1, true)).to.equal(`Sorry, there are no ${pet}(s) available for adoption at the agency.`);
    });

    it('Available count = 0', () => {
      const pet = 'dog';

      expect(petAdoptionAgency.isPetAvailable(pet, 0, false)).to.equal(`Sorry, there are no ${pet}(s) available for adoption at the agency.`);
    });

    it('Available count > 0', () => {
      const pet = 'dog';
      const availableCount = 1;

      expect(petAdoptionAgency.isPetAvailable(pet, availableCount, true)).to.equal(`Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`);
      expect(petAdoptionAgency.isPetAvailable(pet, availableCount, false)).to.equal(`Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`);
    });

    it('Validate input', () => {
      expect(() => petAdoptionAgency.isPetAvailable(1, 2, true)).to.throw('Invalid input');
      expect(() => petAdoptionAgency.isPetAvailable('a', '1', true)).to.throw('Invalid input');
      expect(() => petAdoptionAgency.isPetAvailable('a', 1, 'true')).to.throw('Invalid input');
      expect(() => petAdoptionAgency.isPetAvailable(1, [], 'true')).to.throw('Invalid input');
    });
  });

  describe('getRecommendedPets', function () {
    it('Desired trait found', () => {
      const petList = [
        { name: 'Rex', traits: 'big' },
        { name: 'Moli', traits: 'small' },
        { name: 'Sheri', traits: 'small' }
      ];

      const desiredTraits = 'small';

      expect(petAdoptionAgency.getRecommendedPets(petList, desiredTraits)).to.equal(`Recommended pets with the desired traits (${desiredTraits}): Moli, Sheri`);
    });

    it('Desired trait not found', () => {
      const petList = [
        { name: 'Rex', traits: 'big' },
        { name: 'Moli', traits: 'small' },
        { name: 'Sheri', traits: 'small' }
      ];

      const desiredTraits = 'tall';

      expect(petAdoptionAgency.getRecommendedPets(petList, desiredTraits)).to.equal(`Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`);
    });

    it('Validate input', () => {
      expect(() => petAdoptionAgency.getRecommendedPets('a', [])).to.throw('Invalid input');
      expect(() => petAdoptionAgency.getRecommendedPets(1, 'a')).to.throw('Invalid input');
      expect(() => petAdoptionAgency.getRecommendedPets([], 1)).to.throw('Invalid input');
    });
  });

  describe('adoptPet', function () {
    it('Success message', () => {
      const adopterName = 'Dimi';
      const pet = 'Sharky';

      expect(petAdoptionAgency.adoptPet(pet, adopterName)).to.equal(`Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`);
    });

    it('Validate input', () => {
      expect(() => petAdoptionAgency.adoptPet(1, 2)).to.throw('Invalid input');
      expect(() => petAdoptionAgency.adoptPet([], {})).to.throw('Invalid input');
      expect(() => petAdoptionAgency.adoptPet('a', 1)).to.throw('Invalid input');
      expect(() => petAdoptionAgency.adoptPet(1, 'a')).to.throw('Invalid input');
    });
  });
});