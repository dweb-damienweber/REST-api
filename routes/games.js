const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

// Add new game
router.post('/', async (req, res) => {
    const game = new Game({
        Title: req.body.Title,
        Studio: req.body.Studio
    });

    try {
        const savedGame = await game.save();
        res.status(200).json(savedGame);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get ALL games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json(error);
    }
});    

// Get ONE game
router.get('/:gameId', async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
});    

// Update ONE game
router.patch('/:gameId', async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);

        const title = req.body.Title;
        const studio = req.body.Studio;

        if (title) {
            game.Title = title;
        }
        if (studio) {
            game.Studio = studio;
        }

        const updatedGame = await game.save();
        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete ONE game
router.delete('/:gameId', async (req, res) => {
    try {
        const removedGame = await Game.remove({ _id: req.params.gameId});
        res.status(200).json(removedGame);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete ALL games
router.delete('/', async (req, res) => {
    try {
        const removedGames = await Game.remove();
        res.status(200).json(removedGames);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
