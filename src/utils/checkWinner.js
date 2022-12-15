export const checkWinner = (c, i) => {
    let res, ret;

    if (c === i) {
        res = "Match Draw";
        ret = -1;
    }

    if (c === 0) {
        if (i === 1) {
            res = "Paper covers rock";
            ret = 1;
        } else if (i === 2) {
            res = "Rock crushes scissors";
            ret = c;
        } else if (i === 3) {
            res = "Rock crushes lizard";
            ret = c;
        } else if (i === 4) {
            res = "Spock vaporizes rock";
            ret = 4;
        }
    } else if (c === 1) {
        if (i === 0) {
            res = "Paper covers rock";
            ret = c;
        } else if (i === 2) {
            res = "Scissors cut paper";
            ret = 2;
        } else if (i === 3) {
            res = "Lizard eats paper";
            ret = 3;
        } else if (i === 4) {
            res = "Paper disproves spock";
            ret = c;
        }
    } else if (c === 2) {
        if (i === 0) {
            res = "Rock crushes scissors";
            ret = 0;
        } else if (i === 1) {
            res = "Scissors cut paper";
            ret = c;
        } else if (i === 3) {
            res = "Scissors decapitate lizard";
            ret = c;
        } else if (i === 4) {
            res = "Spock smashes scissors";
            ret = 4;
        }
    } else if (c === 3) {
        if (i === 0) {
            res = "Rock crushes lizard";
            ret = 0;
        } else if (i === 1) {
            res = "Lizard eats paper";
            ret = c;
        } else if (i === 2) {
            res = "Scissors decapitate lizard";
            ret = 2;
        } else if (i === 4) {
            res = "Lizard poisons spock";
            ret = c;
        }
    } else if (c === 4) {
        if (i === 0) {
            res = "Spock vaporizes rock";
            ret = c;
        } else if (i === 1) {
            res = "Paper disproves spock";
            ret = 1;
        } else if (i === 2) {
            res = "Spock smashes scissors";
            ret = c;
        } else if (i === 3) {
            res = "Lizard poisons spock";
            ret = 3;
        }
    }

    return [ret, res];
};
