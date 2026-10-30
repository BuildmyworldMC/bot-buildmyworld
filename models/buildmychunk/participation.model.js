export default class BuildmychunkParticipation {
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
		this.srcMessage = await client.channels.cache.get(this.srcMessage.channelId).messages.fetch({ message: this.srcMessage.id, force: true });
	}

	async computeScore(client) {
		let score = 0;

		await this.refreshMessage(client);

		const getReactionCount = (message, emoji) => {
			const reaction = message.reactions.cache.get(emoji);
			if (!reaction) return 0;

			return Math.max(0, (reaction.count ?? 0) - Number(reaction.me));
		};

		const one = getReactionCount(this.srcMessage, BuildmychunkParticipation.onePointReaction);
		const two = getReactionCount(this.srcMessage, BuildmychunkParticipation.twoPointsReaction);
		const three = getReactionCount(this.srcMessage, BuildmychunkParticipation.threePointsReaction);
		const four = getReactionCount(this.srcMessage, BuildmychunkParticipation.fourPointsReaction);
		const five = getReactionCount(this.srcMessage, BuildmychunkParticipation.fivePointsReaction);

		score += one;
		score += two * 2;
		score += three * 3;
		score += four * 4;
		score += five * 5;

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
