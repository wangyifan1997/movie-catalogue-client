export const displayError = (context, message) => {
    if (typeof context.errorMessage === 'undefined' || typeof context.showError === 'undefined') {
        return;
    }

    context.errorMessage = message;
    context.showError = true;
};
  
export const hideError = (context) => {
    if (typeof context.showError === 'undefined') {
        return;
    }

    context.showError = false;
}