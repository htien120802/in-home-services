package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.ute.service.enumerate.ServiceStatus;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "Service")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    private String name;

    private String thumbnail;

//    @Column(columnDefinition = "enum('APPROVING', 'APPROVED', 'UNAPPROVED', 'DISABLE', 'DELETE') default 'APPROVING'")
    @Enumerated(EnumType.STRING)
    private ServiceStatus status;

    @ManyToOne
    @JoinColumn(name = "provider_id")
    private ProviderEntity provider;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
    private Set<WorkEntity> works = new HashSet<>();

    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
    private Set<ReviewEntity> reviews = new HashSet<>();

    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
    private Set<ScheduleEntity> schedules = new HashSet<>();

//    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
//    private Set<ImageEntity> images = new HashSet<>();

    @PrePersist
    private void prePersist(){
        if (this.status == null){
            this.status = ServiceStatus.APPROVING;
        }
    }
}
