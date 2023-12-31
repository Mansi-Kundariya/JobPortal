const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

// Create job category
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

// Single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

// Update job by id
exports.updateJob = async (req, res, next) => {
    try {

         /* Whenever in the schema of one collection we provide a reference (in any field) to a document from any other collection, we need a populate() method to fill the field with that document. */
        
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

// Show jobs 
exports.showJobs = async (req, res, next) => {
    try {

        // enable search
        const keyword = req.query.keyword ? {
            title: {
                $regex : req.query.keyword,
                $options : 'i'
            }
        } : { }

        // filter jobs by category
        let ids = [];
        const jobTypeCategory = await JobType.find({}, {_id:1}) //  {_id:1} means we want only ids
        jobTypeCategory.forEach(cat => {
            ids.push(cat.id);   
        })

        let cat = req.query.cat;
        let categ = cat !== '' ? cat : ids;

    
        // enable pagination
        const pageSize = 10;
        const page = Number(req.query.pageNumber) || 1;
        // re-paginate our response
        const count = await Job.find({ ...keyword, jobType: categ }).countDocuments();

        const jobs = await Job.find({ ...keyword,  jobType: categ }).skip(pageSize * (page-1)).limit(pageSize);
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })
    } catch (error) {
        next(error);
    }
}
