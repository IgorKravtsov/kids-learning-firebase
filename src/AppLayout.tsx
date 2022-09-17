import React, { Suspense } from "react";
import { Routes } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

import { authRoutes, defaultRoutes } from "./routes";
import { useAuth } from "hooks/useAuth";
import { useAppDispatch, useAppSelector } from "storage/hooks/typedHooks";
import { clear, selectSnackbar } from "storage/slices/snackbarSlice";

import LoadingSkeleton from "components/loadingSkeleton/LoadingSkeleton";

const AppLayout: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth();
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      clear({
        message: "",
      })
    );
  };

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        {!isAuth ? [...defaultRoutes] : [...authRoutes]}
        {/*{isAdmin && [...adminRoutes]}*/}
        {/*<Route path="*" element={<Navigate to={RouteName.HOME} replace />} />*/}
      </Routes>

      <Snackbar
        TransitionComponent={Slide}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Suspense>
  );
};

export default AppLayout;
