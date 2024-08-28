import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    // Function to load PayPal SDK script
    const loadPayPalScript = () => {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AebObVWjLBbjHWKXDQLAvm1EANI4eBlkaJOV5wJyxpmUso1yhLpm_hAemZ_trm7ZqeCpjd841dwtw9L-&currency=USD";
      script.async = true;
      script.onload = () => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '10.00' // Replace with the actual amount
                  }
                }]
              });
            },
            onApprove: async (data, actions) => {
              await actions.order.capture();
              alert('Transaction completed by ' + data.payer.email_address);
            },
            onError: (err) => {
              console.error('PayPal error:', err);
              alert('An error occurred while processing your payment.');
            }
          }).render('#paypal-button-container'); // Render the PayPal button in the specified container
        } else {
          console.error('PayPal SDK not loaded');
        }
      };
      document.body.appendChild(script);
    };

    loadPayPalScript();

    // Cleanup the script on unmount
    return () => {
      const script = document.querySelector('script[src*="paypal.com/sdk/js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
