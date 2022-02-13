const VACATIONS = [
  {
    id: 1,
    name: "Annual",
    uploadDate: new Date(2022, 1, 6),
    uploaderName: "Adam",
    status: "Pending",
    attachment: "",
  },
  {
    id: 2,
    name: "Sick",
    uploadDate: new Date(2022, 1, 11),
    uploaderName: "Adam",
    status: "Approved",
    attachment: "",
  },
  {
    id: 3,
    name: "Time-off",
    uploadDate: new Date(2022, 1, 9),
    uploaderName: "Ammar",
    status: "Pending",
    attachment: "",
  },
  {
    id: 4,
    name: "Sick",
    uploadDate: new Date(2022, 1, 8),
    uploaderName: "Ammar",
    status: "Approved",
    attachment: "",
  },
  {
    id: 5,
    name: "Leave",
    uploadDate: new Date(2022, 1, 5),
    uploaderName: "Adam",
    status: "Declined",
    attachment: "",
  },
];

export function getCurrentUserVacations() {
  return VACATIONS.filter((vacation) => {
    return (
      vacation.uploaderName == JSON.parse(localStorage.getItem("currentUser"))
    );
  });
}

export function getCurrentUSerPendingVacations() {
  return getCurrentUserVacations().filter((vacation) => {
    return vacation.status == "Pending";
  });
}

export function sortVacationsByDate() {
  return VACATIONS.sort((a, b) => {
    return new Date(b.uploadDate) - new Date(a.uploadDate);
  });
}

export function getVacationsObjectKeys() {
  return Object.keys(VACATIONS[0]);
}

export function deleteVacation(id) {
  return VACATIONS.filter((vacation) => {
    return vacation.id !== id;
  });
}

export default VACATIONS;
