import { expect } from "chai";
import { streamingServiceSelector } from "./Streaming-Service-Selector.js";

describe('Streaming Service Selector', function () {
  describe('selectingContent', function () {
    it('test 1', () => {
      expect(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'a')).to.throw('We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
    });

    it('test 2', () => {
      expect(() => streamingServiceSelector.selectingContent('a', 'Netflix', 'Action')).to.throw("We currently only support 'Movie' or 'TV Show' types.");
    });

    it('Valid input', () => {
      const genre = 'Action';
      const type = 'Movie';
      const platform = 'Netflix';

      expect(streamingServiceSelector.selectingContent(type, platform, genre)).to.equal(`You can watch this ${genre} ${type} on ${platform}. Enjoy your ${genre}-filled experience!`);
    });
  });

  describe('availablePlatforms', function () {
    it('test 1', () => {
      expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 0)).to.equal('Other available platforms are: HBO, Disney+.');
    });

    it('test 2', () => {
      expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 2)).to.equal('Other available platforms are: Netflix, HBO.');
    });

    it('Invalid input', () => {
      expect(() => streamingServiceSelector.availablePlatforms('a', 1)).to.throw('Invalid platform selection.');
      expect(() => streamingServiceSelector.availablePlatforms([], 'a')).to.throw('Invalid platform selection.');
      expect(() => streamingServiceSelector.availablePlatforms(['a', 'b'], -1)).to.throw('Invalid platform selection.');
      expect(() => streamingServiceSelector.availablePlatforms(['a', 'b'], 3)).to.throw('Invalid platform selection.');
    });
  });

  describe('contentRating', function () {
    it('test 1', () => {
      const viewerRating = 7;
      const runtimeInMinutes = 120;
      const runtimeInHours = (runtimeInMinutes / 60).toFixed(2);

      expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`);
    });

    it('test 2', () => {
      const viewerRating = 8;
      const runtimeInMinutes = 120;
      const runtimeInHours = (runtimeInMinutes / 60).toFixed(2);

      expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`);
    });

    it('test 3', () => {
      const viewerRating = 6;
      const runtimeInMinutes = 120;
      const runtimeInHours = (runtimeInMinutes / 60).toFixed(2);

      expect(streamingServiceSelector.contentRating(runtimeInMinutes, viewerRating)).to.equal(`This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`);
    });

    it('Invalid input', () => {
      expect(() => streamingServiceSelector.contentRating(-1, 1)).to.throw('Invalid runtime or rating.');
      expect(() => streamingServiceSelector.contentRating(1, 11)).to.throw('Invalid runtime or rating.');
    });
  });
});