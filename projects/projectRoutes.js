const express = require('express');
const projectDb = require('./projectModel');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { name, description, completed } = req.body;
    if (!name, !description) {
        res.status(404).json({errorMessage: 'Please provide a name and a description for this project.'});
    } else {
        try {
            const response = await projectDb.insert({ name, description, completed });
            res.status(201).json(response);
        } catch (ex) {
            next(ex);
        }
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await projectDb.get();
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await projectDb.get(id);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
})

router.get('/:id/actions', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await projectDb.getProjectActions(id);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const { name, description, completed } = req.body;
    if (!name || !description) {
        res.status(400).json({errorMessage: 'Please provide a name and a description for this project.'});
    } else {
        try {
            const response = await projectDb.update(id, { name, description, completed });
            if (response !== null) {
                res.status(201).json(response);
            } else {
                res.status(404).json({errorMessage: 'The project with the specified ID does not exist.'});
            }
        } catch (ex) {
            next(ex);
        }
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await projectDb.remove(id);
        res.status(204).end();
    } catch (ex) {
        next(ex);
    }
})

module.exports = router;