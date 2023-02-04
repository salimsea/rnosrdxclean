export const FUNCConvertDateDmyToYmd = date => {
  var slicedd = date.slice(0, 2);
  var slicemm = date.slice(3, 5);
  var sliceyy = date.slice(6, 10);
  return sliceyy + '-' + slicemm + '-' + slicedd;
};
