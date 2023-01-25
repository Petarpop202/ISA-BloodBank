package com.example.bloodbank.Service;
import java.util.List;

import com.example.bloodbank.Model.Complains;
import com.example.bloodbank.Model.SystemAdministrator;

public interface IComplainService extends ICRUDService<Complains> {
	public Complains updateResponse(long complainId, String response);
	public Complains updateSystemAdministrator(long complainId, long adminId, long userId);
	public List<Complains> getComplainsWithNoResponse();
	public List<Complains> getComplainsWithResponse(long adminId);
}





