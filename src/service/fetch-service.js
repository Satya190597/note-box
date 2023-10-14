function getAllData() {
  return fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=E1YiaiSQ8SyYn4nCAa2f2f2XaeAQCitT8vvN2KixLiQjcFIpKjhybkINzDoUgvygy7ohtb8PhYf79IYxyy0PSgeddt3yPkYwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAgTU492HqJ3g0qGpTmdsa7hiYtDZB0f4mG8auKthW_neCJ4Y4rXGJ5XfIusph1oeZPRR4o38g9CnmUfpzxhFbtkI-YohDEiwA&lib=MB2VrFEPRJP_xK9dPh0qpgi_nbiigEm_c"
  )
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getAllData };
