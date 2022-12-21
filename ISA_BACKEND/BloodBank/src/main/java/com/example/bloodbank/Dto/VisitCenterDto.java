package com.example.bloodbank.Dto;

public class VisitCenterDto {
    private long Id;
    private long DonorId;
    private long AppointmentId;
    private int price;
    private boolean isCanceled;
    public long getDonorId() {
        return DonorId;
    }

    public void setDonorId(long donorId) {
        DonorId = donorId;
    }

    public long getAppointmentId() {
        return AppointmentId;
    }

    public void setAppointmentId(long appointmentId) {
        AppointmentId = appointmentId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isCanceled() {
        return isCanceled;
    }

    public void setCanceled(boolean canceled) {
        isCanceled = canceled;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }
}
