const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/frequency', (req, res) => {
    res.redirect('/sprint18c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/bankdetails', (req, res) => {
    res.redirect('/sprint18c/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/workphone', (req, res) => {
    res.redirect('/sprint18c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/mobilephone', (req, res) => {
    res.redirect('/sprint18c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/email', (req, res) => {
    res.redirect('/sprint18c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/homephone', (req, res) => {
    res.redirect('/sprint18c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/find', (req, res) => {
    res.redirect('/sprint18c/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint18c/address', (req, res) => {
    res.redirect('/sprint18c/address-1')
  })
  ;

  router.post('/sprint18c/address-1', (req, res) => {
    res.redirect('/sprint18c/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/sprint18c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/sprint18c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/sprint18c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/sprint18c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/sprint18c/workphone', (req, res) => {
    res.redirect('/sprint18c/overview')
  })
  ;

  // Email removal
  router.post('/sprint18c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/sprint18c/marital-status', (req, res) => {
    res.redirect('/sprint18c/marriage-details')
  })
  ;

  router.post('/sprint18c/marriage-details', (req, res) => {
    res.redirect('/sprint18c/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/sprint18c/contact-preferences', (req, res) => {
    res.redirect('/sprint18c/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/sprint18c/occupants', (req, res) => {
    res.redirect('/sprint18c/reason-removed1')
  })
  ;

  router.post('/sprint18c/reason-removed1', (req, res) => {
    res.redirect('/sprint18c/searchlight-check')
  })
  ;


  router.post('/sprint18c/searchlight-check', function(req, res) {
    if ( req.body['searchlight'] === 'yes' ) {
      res.redirect('evidence-request');
    } else {
      res.redirect('move-date');
    }
  });

  router.post('/sprint18c/move-date', (req, res) => {
    res.redirect('/sprint18c/confirm-top-up')
  })
  ;

  router.post('/sprint18c/confirm-top-up', (req, res) => {
    res.redirect('/sprint18c/overview-evidence-received')
  })
  ;

  router.post('/sprint18c/check-underpayment', (req, res) => {
    res.redirect('/sprint18c/evidence-request')
  })
  ;

  router.post('/sprint18c/evidence-request', (req, res) => {
    res.redirect('/sprint18c/overview-awaiting-verification')
  })
  ;

  router.post('/sprint18c/evidence-verification', (req, res) => {
    res.redirect('/sprint18c/confirm-top-up')
  })
  ;


  // Stopping payments
  router.post('/sprint18c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
