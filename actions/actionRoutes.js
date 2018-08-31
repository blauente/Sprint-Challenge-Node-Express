const express = require('express');
const actionDb = require('./actionModel');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json({errorMessage: 'Please provide a project_id, a description, and notes for this action.'});
    } else {
        try {
            const response = await actionDb.insert({ project_id, description, notes, completed });
            res.status(201).json(response);
        } catch (ex) {
            next(ex);
        }
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await actionDb.get();
        res.status(200).json(response);
    } catch (ex) {
        next(ex)
    }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await actionDb.get(id);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json({errorMessage: 'Please provide a project_id, a description, and notes for this action.'});
    } else {
        try {
            const response = await actionDb.update(id, { project_id, description, notes, completed });
            if (response !== null) {
                res.status(201).json(response);
            } else {
                res.status(404).json({errorMessage: 'The action with the specified ID does not exist.'});
            }
        } catch (ex) {
            next(ex);
        }
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await actionDb.remove(id);
        res.status(204).end();
    } catch (ex) {
        next(ex);
    }
})

module.exports = router;