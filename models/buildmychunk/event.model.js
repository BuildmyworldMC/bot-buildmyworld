module.exports = class BuildmychunkEvent {
  constructor (eventName) {
    this.title = eventName;
    this.participations = [];
  }

  async computeResult(client) {
		let participations = this.participations;

    for (let participation of participations) {
      participation.score = await participation.computeScore(client);
    }

    participations.sort((firstParticipation, secondParticipation) => {
			return secondParticipation.score > firstParticipation.score ? 1 : -1;
		});

		let positionIndex = 1;
		let previousScore = participations[0].score;

		participations.forEach((participation) => {
			if (participation.score < previousScore) {
				previousScore = participation.score;
				positionIndex++;
			}

			participation.position = positionIndex;
		});

    let result = `Résultat de l'événement ${this.title}`;

    participations.forEach((participation) => {
      result += `\n${participation.getPositionEmoji()} ${participation.name} : ${participation.score} point${participation.score > 1 ? 's' : ''}`;
    });

    return result;
  }
}
