const Lead = require('../models/Lead');

// Add a new lead
exports.addLead = async (req, res) => {
  const { name, email, status } = req.body;

  try {
    // Check if email already exists
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already exists. Please use a unique email.' 
      });
    }

    // Create and save the new lead
    const lead = new Lead({ 
      name, 
      email, 
      status: status || "New", // Use provided status or default to "New"
      createdAt: new Date() // Automatically set the current timestamp
    });

    await lead.save();

    // Success response
    res.status(201).json({ 
      success: true, 
      message: 'Lead added successfully.', 
      data: lead 
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while adding the lead.', 
      error: err.message 
    });
  }
};



// Fetch all leads with pagination
exports.getLeads = async (req, res) => {
  try {
    // Get page and limit from query parameters, with defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    // Fetch total count of leads for pagination metadata
    const totalLeads = await Lead.countDocuments();

    // Fetch leads for the current page, sorted by createdAt in descending order
    const leads = await Lead.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Calculate total pages
    const totalPages = Math.ceil(totalLeads / limit);

    // Success response with pagination metadata
    res.status(200).json({
      success: true,
      message: 'Leads fetched successfully.',
      data: {
        leads,
        pagination: {
          currentPage: page,
          totalPages,
          totalLeads,
          limit,
        },
      },
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching leads.',
      error: err.message,
    });
  }
};