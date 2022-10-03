module.exports = class BuildmychunkParticipation {
	static onePointReaction = '1️⃣';
	static twoPointsReaction = '2️⃣';
	static threePointsReaction = '3️⃣';
	static fourPointsReaction = '4️⃣';
	static fivePointsReaction = '5️⃣';

	constructor (name, srcMessage) {
		this.name = name;
		this.srcMessage = srcMessage;
		this.position = 0;
		this.score = 0;
	}

	async refreshMessage(client) {
		this.srcMessage = await client.channels.cache.get(this.srcMessage.channelId).messages.fetch(this.srcMessage.id);
	}

	async computeScore(client) {
		let score = 0;

		await this.refreshMessage(client);

		score += this.srcMessage.reactions.cache.get(BuildmychunkParticipation.onePointReaction).count - 1; // - 1 for exclude bot reaction
		score += (this.srcMessage.reactions.cache.get(BuildmychunkParticipation.twoPointsReaction).count - 1) * 2; // * <number> for applied value of reaction in calculation
		score += (this.srcMessage.reactions.cache.get(BuildmychunkParticipation.threePointsReaction).count - 1) * 3;
		score += (this.srcMessage.reactions.cache.get(BuildmychunkParticipation.fourPointsReaction).count - 1) * 4;
		score += (this.srcMessage.reactions.cache.get(BuildmychunkParticipation.fivePointsReaction).count - 1) * 5;

		return score;
	}

	getPositionEmoji() {
		switch (this.position) {
			case 1:
				return '🥇';

			case 2:
				return '🥈';

			case 3:
				return '🥉';

			default:
				return '🏅';
		}
	}
}
