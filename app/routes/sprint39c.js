const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/sprint39c/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint39c/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------

// Find someone to find result
router.post('/sprint39c/find', (req, res) => {
  res.redirect('/sprint39c/find-1')
});

// Find result to security
router.post('/sprint39c/find-1', (req, res) => {
  res.redirect('/sprint39c/security')
});

// Security to extra security (failed question)
router.post('/sprint39c/security', (req, res) => {
  res.redirect('/sprint39c/security-extra')
});

//
router.post('/sprint39c/security-extra', (req, res) => {
  res.redirect('/sprint39c/overview-security')
});

//
router.post('/sprint39c/contact-preferences', (req, res) => {
  res.redirect('/sprint39c/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/sprint39c/correspondence-address', (req, res) => {
  res.redirect('/sprint39c/correspondence-address-1')
});

// Correspondence address to address found
router.post('/sprint39c/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/sprint39c/correspondence-address-search', (req, res) => {
  res.redirect('/sprint39c/correspondence-address-search-result')
});

router.post('/sprint39c/correspondence-address-search-result', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Home phone number change back to contact
router.post('/sprint39c/homephone', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Home phone number removal
router.post('/sprint39c/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/sprint39c/workphone', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Work phone number removal
router.post('/sprint39c/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/sprint39c/mobilephone', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Mobile phone number removal
router.post('/sprint39c/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/sprint39c/email', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Email removal
router.post('/sprint39c/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/sprint39c/contact-preferences', (req, res) => {
  res.redirect('/sprint39c/contact')
});

// Address -------------------------------------------------------------------
router.post('/sprint39c/address', function(req, res) {
  if (req.body['postcode'] === 'NE3 1QD') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/sprint39c/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/sprint39c/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint39c/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint39c/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/sprint39c/move-date', (req, res) => {
  res.redirect('/sprint39c/homephone-address')
});

// Care home move date
router.post('/sprint39c/carehome-move-date', (req, res) => {
  res.redirect('/sprint39c/declaration')
});


router.post('/sprint39c/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    }
    else if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('living-with');
    }
});



router.post('/sprint39c/homephone-address-change', (req, res) => {
  res.redirect('/sprint39c/living-with')
});



// Living with anyone at address change
router.post('/sprint39c/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age');
  } else {
    res.redirect('poa');
  }
});

// Living with anyone at address change
router.post('/sprint39c/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('poa');
  }
});

// Power of attourney
router.post('/sprint39c/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/sprint39c/poa-people', (req, res) => {
  res.redirect('/sprint39c/declaration')
});

// Declaration

router.post('/sprint39c/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('over-payment');
    } else {
      res.redirect('overview-changed');
    }
});


// Overpayment recoverable?
router.post('/sprint39c/over-payment', function(req, res) {
  if (req.body['recoverable'] === 'yes') {
    res.redirect('recoverable-payment');
  } else {
    res.redirect('overview-changed');
  }
});

// Check to payments
router.post('/sprint39c/recoverable-payment', (req, res) => {
  res.redirect('/sprint39c/overview-recoverable')
});

// Check to payments
router.post('/sprint39c/check', (req, res) => {
  res.redirect('/sprint39c/make-payment')
});

// Make payment to contact
router.post('/sprint39c/make-payment', (req, res) => {
  res.redirect('/sprint39c/overview-topup-1')
});



// Living with age back to contact
router.post('/sprint39c/living-with-age', (req, res) => {
  res.redirect('/sprint39c/poa')
});

// Living with age back to contact
router.post('/sprint39c/living-with-age-q-week', (req, res) => {
  res.redirect('/sprint39c/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/sprint39c/bankdetails', (req, res) => {
  res.redirect('/sprint39c/confirm-bank')
});

// Bank confirm to payment
router.post('/sprint39c/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/sprint39c/reissue-payment', (req, res) => {
  res.redirect('/sprint39c/payment-confirmation')
});

// Starting payments
router.post('/sprint39c/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('payment-stopped');
  }
});

module.exports = router;
